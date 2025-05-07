# LEARNINGS via this DAD JOKE app 
### Some keywords explained for myself 
**Qwikcity** - QWIK's meta framework that uses _directory-based_ routing

**directory-based routing** - Routing in Qwik City is file-system based like Next.js, SvelteKit, SolidStart or Remix. Files and directories in the src/routes have a role in the routing of your application.

**layout** - Layouts provide nested UI and request handling (middleware) to a set of routes:
- **Shared request handling**: Accomplished by adding an onRequest method.
- **Shared UI**: Accomplished by export default a Qwik component.

**routeLoader$()** - Route Loaders load data in the server so it becomes available to use inside Qwik Components. They trigger when SPA/MPA navigation happens so they can be invoked by Qwik Components during rendering.

**routeAction$** - Used to send data from client back to server , like posting data to server.

**useSignal()** - this is a hook provided by Qwik to keep track of the states.

## Pointers
- In this "jokes" directory (which becomes my url), this becomes a route.
- Each route's index.tsx must have the ```export default component$1``` to allow Qwikcity determine what content to serve.

## How it looks ?
![Dad Joke Screenshot ](/public/dad_joke.png)
