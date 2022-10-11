/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserActiveBanResponseV3 = z.object({ ban: z.string(), banId: z.string(), endDate: z.string() })

export type UserActiveBanResponseV3 = z.TypeOf<typeof UserActiveBanResponseV3>
