/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentToken = z.object({ token: z.string().nullish() })

export type PaymentToken = z.TypeOf<typeof PaymentToken>
