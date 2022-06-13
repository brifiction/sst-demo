import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from "aws-lambda";
import { DateTime } from "luxon";

export const handler: APIGatewayProxyHandlerV2 = async (
  event: APIGatewayProxyEventV2
) => {
  const now = DateTime.now().setZone("Australia/Melbourne"); // or ${event.requestContext.time}

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: `This is backend-api-stack-beta. Your request was received at ${now}.`,
      timestamp: now,
    }),
  };
};
