/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EventLevel = z.object({ Description: z.string(), EventLevel: z.number().int() })

export type EventLevel = z.TypeOf<typeof EventLevel>
