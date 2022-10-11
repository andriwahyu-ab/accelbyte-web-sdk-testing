/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserProfileUpdate = z.object({
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
  avatarSmallUrl: z.string().nullish(),
  avatarUrl: z.string().nullish(),
  avatarLargeUrl: z.string().nullish(),
  language: z.string().nullish(),
  timeZone: z.string().nullish(),
  dateOfBirth: z.string().nullish(),
  customAttributes: z.record(z.any()).nullish(),
  zipCode: z.string().nullish()
})

export type UserProfileUpdate = z.TypeOf<typeof UserProfileUpdate>
