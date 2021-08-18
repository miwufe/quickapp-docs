# Framework overview

This is a framework for app development mainly focusing on front-end development technology stacks. It uses popular front-end development models, which are adjusted to fit the thinking habits of mainstream front-end developers. It also substantially improves the app's performance, offers plenty of options that can be implemented in front-end environments alone, as well as many third-party service docking capabilities.

## File structure

The app is made up of a manifest.json and multiple URL/component UX files. Information such as the app's description, declaration of function permissions, system configuration and URL routing are defined in the manifest.json file. The specific realization of a single web page or component is accomplished in the web page/component UX file, including the UI template, style sheet, data specification, callback event processing, etc. For specific usage, see the [File organization](file-organization.en.md) chapter.

## App framework

### Routing

The framework manages the entire web page router of the app, realizes seamless handovers between web pages, and manages the entire lifecycle of the web page. Developers need to register the web page in the manifest.json file, and realize the web page handover in the code through the interface method offered by the framework. For specific usage, see the [Manifest](manifest.en.md) and the [Page routing](../features/router.en.md) chapters.

### Data binding

Data binding makes it extremely easy to keep data and visuals synced. When data is modified, you only need to modify the data in the code, and the visual layer will update correspondingly. For specific use of data binding, see the [Template](template.en.md) chapter.

### Interface components

The framework offers basic interface components. Apart from supporting commonly used HTML5 tags such as `<div>, <a>, and <input>`, we also provide the tags related to the native UI, such as `<switch>, <slider>, and <list>`. For specific usage, see the [Widgets](../widgets/common-events.en.md) chapter.

### Native interface

The framework also offers many native interface elements, which include the commonly used system and third-party docking capabilities, such as network requests, local storage, Mi Pay, etc. These APIs can greatly decrease the workload for developers, allowing them to work faster. For specific usage, see the [Features](../features/index.en.md) chapter.
