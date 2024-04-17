resource "aws_api_gateway_rest_api" "MailingApi" {
  name        = "MailingApi"
  description = "This is my API to receive email from my personal website"
}

resource "aws_api_gateway_resource" "MailingRessource" {
  rest_api_id = aws_api_gateway_rest_api.MailingApi.id
  parent_id   = aws_api_gateway_rest_api.MailingApi.root_resource_id
  path_part   = "send-email"
}

resource "aws_api_gateway_method" "MailingMethod" {
  rest_api_id   = aws_api_gateway_rest_api.MailingApi.id
  resource_id   = aws_api_gateway_resource.MailingRessource.id
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_deployment" "MailingDeployment" {
  rest_api_id = aws_api_gateway_rest_api.MailingApi.id

  triggers = {
    redeployment = sha1(jsonencode(aws_api_gateway_rest_api.example.body))
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "example" {
  deployment_id = aws_api_gateway_deployment.example.id
  rest_api_id   = aws_api_gateway_rest_api.example.id
  stage_name    = "example"
}

resource "aws_apigatewayv2_integration" "hello_world" {
  api_id = aws_apigatewayv2_api.lambda.id

  integration_uri    = aws_lambda_function.hello_world.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "hello_world" {
  api_id = aws_apigatewayv2_api.lambda.id

  route_key = "GET /hello"
  target    = "integrations/${aws_apigatewayv2_integration.hello_world.id}"
}

resource "aws_cloudwatch_log_group" "api_gw" {
  name = "/aws/api_gw/${aws_apigatewayv2_api.lambda.name}"

  retention_in_days = 30
}

resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.hello_world.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.lambda.execution_arn}/*/*"
}
