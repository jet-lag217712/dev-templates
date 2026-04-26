output "aws_region" {
  description = "The AWS region resources were deployed into"
  value       = var.aws_region
}

output "project_name" {
  description = "The project name used for resource naming and tagging"
  value       = var.project_name
}

output "environment" {
  description = "The deployment environment"
  value       = var.environment
}
