data "aws_iam_policy_document" "lambdaSender_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["ses:SendEmail", "ses:SendRawEmail"]
  }
  resource = [
                "arn:aws:ses:*:336365645045:identity/*",
				"arn:aws:ses:eu-west-1:336365645045:configuration-set/my-first-configuration-set"
            ]
}

resource "aws_iam_role" "iam_for_lambdaSender" {
  name               = "iam_for_lambdaSender"
  assume_role_policy = data.aws_iam_policy_document.lambdaSender_role.json
}

data "archive_file" "lqmbd" {
  type        = "zip"
  source_file = "lambda.js"
  output_path = "lambda_function_payload.zip"
}

resource "aws_lambda_function" "test_lambda" {
  # If the file is not in the current working directory you will need to include a
  # path.module in the filename.
  filename      = "lambda_function_payload.zip"
  function_name = "lambda_function_name"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "index.test"

  source_code_hash = data.archive_file.lambda.output_base64sha256

  runtime = "nodejs18.x"

  environment {
    variables = {
      foo = "bar"
    }
  }
}