import { ApiProperty } from "@nestjs/swagger";

export class TokensDto {
  @ApiProperty({ description: "Access token" })
  access_token: string;

  @ApiProperty({ description: "Refresh token" })
  refresh_token: string;
}
