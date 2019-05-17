import { wait } from "/apis/functions"
import { User } from "/models"
import SampleData from "/utils/SampleData"

import { USER_NOT_FOUND } from "./errors"
import { GetUserInfoParams } from "./types"

export async function getInfo(params: GetUserInfoParams): Promise<User> {
  // Give a little delay to look like the real api request
  await wait()

  const user = SampleData.users.find((user) => user.id === params.id)

  if (!user) {
    throw USER_NOT_FOUND
  }

  return user
}
