## Why a build chain that complex?

Scratch Addons has reached a point where it's not just a simple userscript anymore.
While the user's expectations are still the same, the complexity of the project has increased by a lot.

The information is spread out across different repositories, and the project has a lot of moving parts.
The developer experience shouldn't suffer because of that.

While it's true a very simple build chain, or no build chain at all, is easier for new developers,
it also makes it harder for experienced developers to build and maintain a project as complex as Scratch Addons.

Also, most of Scratch Addons' contributors are experienced developers anyway, so that excuse wasn't really valid in the first place.

In any case, if a new developer is not familiar with the build chain, they can still contribute to the project by writing the script part of the addon, documentation, tests, or even just by asking questions.
They don't really need to understand the build chain to contribute.
I'll also make sure the main commands are well documented and easy to find.

The other and more complex parts of the project are usually maintained by a smaller group of people.

## Why Docusaurus?

There is no specific reason for Docusaurus itself.
I was mainly looking for a tool that can:
- generate static pages
- also supports dynamic content (islands architecture)
- is well known in the community
- supports markdown as a source
- supports JSX for custom components

Docusaurus met all these requirements, tho it's not the only tool that does.

## Why React and not Vue?

I was mainly looking for a tool that uses JSX syntax, and that can easily be integrated with the other tools used in the project.

I know that most Scratch Addons contributors are familiar with Vue to some extent, but React has a larger community and more resources available.
Finding a tool with similar capabilities to Docusaurus would have been harder if it had to be Vue-based.

It's also easier to find React libraries and components, as well as people who can help with React-related issues.

Finally, because React is style agnostic, it's easier to decouple and reuse components across different projects, like the website and the extension.
