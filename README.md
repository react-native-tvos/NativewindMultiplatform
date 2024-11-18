# NativeWind multiplatform demo

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app), showing how TailwindCSS styles can be used in React Native apps.

This app can be built for web, mobile devices (iOS, iPadOS, and Android), and TV devices (Apple TV, Android TV).

You can see the web version at

https://nativewindmultiplatform.expo.app/

Some of the packages used:

- The [React Native TV fork](https://github.com/react-native-tvos/react-native-tvos), which supports both phone (Android and iOS) and TV (Android TV and Apple TV) targets
- The [React Native TV config plugin](https://github.com/react-native-tvos/config-tv/tree/main/packages/config-tv), to allow Expo prebuild to modify the project's native files for TV builds
- The [NativeWind](https://www.nativewind.dev/) package which lets you use Tailwind CSS in react-native.
- The [react-native-bottom-tabs](https://github.com/okwasniewski/react-native-bottom-tabs) package that provides a fully native tab bar (top bar for Apple TV, bottom bar for Android TV).

## 🚀 How to use

- `cd` into the project

- Build for mobile devices (including iPad tablet support)

```sh
yarn
yarn prebuild # Executes a clean Expo prebuild to generate iOS and Android native files
yarn ios # Build and run for iOS
yarn android # Build and run for Android
```

- Build for TV devices

```sh
yarn
yarn prebuild:tv # Executes a clean Expo prebuild to generate tvOS and Android TV native files
yarn ios # Build and run for Apple TV
yarn android # Build and run for Android TV
```

- Web (local development)

```sh
yarn
yarn web # Runs the web app as a local development server on port 8081
```

- Web (deploy to EAS hosting)

```sh
yarn
eas init
yarn build:web # Build the web deployment bundle
yarn deploy:web # Deploy to the EAS hosting dev environment
```

> **_NOTE:_**
> Setting the environment variable `EXPO_TV=1` enables the `@react-native-tvos/config-tv` plugin to modify the project for TV.
> This can also be done by setting the parameter `isTV` to true in the `app.json`.

## 📝 Notes

The UI is derived from the [NativeWind example app](https://github.com/nativewind/nativewind/tree/main/examples/expo-router) plus [this Tailwind CSS example](https://tailwindcomponents.com/component/premium-banner-around-button). It includes [custom CSS transforms](./global.css).

### Theming

[`Theme.ts`](./constants/Theme.ts) contains dark and light versions of the custom colors used in the app, as well as custom scale factors for scaling buttons when they are focused, hovered, or active. The colors are the same as those used in the default template used when creating new Expo Router apps. [`useTheme.ts`](./hooks/useTheme.ts) exports a hook that returns the current theme.

The [root layout](./app/_layout.tsx) sets the theme as the style in the root view.

The [themed components](./components) demonstrate how to use NativeWind class names and the custom colors to provide consistent text, button, and link appearance. These are used both in the [home screen](<./app/(tabs)/index.tsx>) and the [tab layout for web](./layouts/TabLayout.tsx).

### Tab layout

The app provides a [native tab layout](./layouts/TabLayout.tsx) using `react-native-bottom-tabs`.

For web and Android TV, the [web tab layout](./layouts/TabLayout.web.tsx) uses the [custom tab layout](https://docs.expo.dev/router/advanced/custom-tabs/) feature of Expo Router.

### Focus, hover, and active styles

These are shown in the [focus/hover/active demo screen](<./app/(tabs)/tvdemo.tsx>).

- The buttons are styled with `focus:bg-blue-300` and `active:bg-green-600`. On TV, the `focus` prefix causes the style to be applied to controls when `onFocus()` is invoked, and the style is removed when `onBlur()` is invoked. On both TV and mobile, the `active` prefix applies the style when `onPressIn()` is invoked, and removes it when `onPressOut()` is invoked.
- The buttons are also styled with `hover:bg-blue-300`, to apply that style when the mouse hovers over the button in the web version of the app.
- Finally, `transition duration-500` is applied so that the focus, blur, and hover transitions happen smoothly with an animation.

### Compatibility with native components provided by Expo packages

The [home screen](<./app/(tabs)/index.tsx>) shows how to wrap the `<Image />` component provided by `expo-image` for use with NativeWind, using [the `cssInterop()` API](https://www.nativewind.dev/api/css-interop).

The [video demo](./components/VideoTest.tsx) shows the same technique applied to the `<VideoView />` component from `expo-video`.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/learn): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
- [Building Expo apps for TV](https://docs.expo.dev/guides/building-for-tv/)

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
