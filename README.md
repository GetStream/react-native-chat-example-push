# Stream React Native Push Test App

[Chat Example Push][7] is a React Native test application that integrates with [Stream Chat][6] and allows you to test the push notification configs for your chat apps. You can read more about how to configure your app for push notifications [here][5].

## Setup

1. Install deps:

   ```bash
   yarn install
   ```

2. Copy template `env` file

   ```bash
   cp .env.example .env
   ```

3. Edit `.env` file and add:

   - Your Stream API Key
   - A user id to associate a device with (eg: `bob123`)
   - A user token for that user id. If your app is in [development mode and has auth disabled][1], the token doesn't need to be valid
   - A sender id from [Google FCM][2] (only if you want to test with Android, leave blank otherwise)

   ```bash
   API_KEY=key
   USER_TOKEN=user_token_for_bob
   USER_ID=bob123
   SENDER_ID=sender_id_from_google
   ```

4. `[iOS Only]` Setup the XCode project with [code signing and push capabilities][3]. Make sure the bundle id you specify in the XCode project settings matches the one used when [configuring push settings][5] for your app.

## Testing Push Notifications

1. Run the test app on your desired device
2. Use `getstream-cli` to [send out test push notifications][4]. Make sure the `user_id` used in the `.env` file and the one used in the cli match.

## Copyright and License Information

Copyright (c) 2015-2019 Stream.io Inc, and individual contributors. All rights reserved.

See the file "LICENSE" for information on the history of this software, terms & conditions for usage, and a DISCLAIMER OF ALL WARRANTIES.

[1]: https://getstream.io/chat/docs/#rn_push_initial
[2]: https://firebase.google.com/docs/cloud-messaging/
[3]: https://getstream.io/chat/docs/#chat-doc-rn-ios-run
[4]: https://getstream.io/chat/docs/#push_test
[5]: https://getstream.io/chat/docs/#push_ios
[6]: https://getstream.io/chat
[7]: https://github.com/GetStream/react-native-chat-example-push
