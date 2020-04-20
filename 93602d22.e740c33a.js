(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),i=(n(0),n(166)),r={id:"contentful",title:"Implementing Contentful",sidebar_label:"Contentful"},l={id:"recipes/contentful",title:"Implementing Contentful",description:"This recipe aims to guide you through the implementation of Contentful in the project and also provides custom solutions for different use-cases.  ",source:"@site/docs/recipes/contentful.md",permalink:"/docs/recipes/contentful",sidebar_label:"Contentful",sidebar:"docs",previous:{title:"Changing favicon according to OS theme",permalink:"/docs/recipes/favicon-os-theme"},next:{title:"Integrating DatoCMS",permalink:"/docs/recipes/dato-cms"}},c=[{value:"What is a CMS?",id:"what-is-a-cms",children:[]},{value:"Contentful",id:"contentful",children:[]},{value:"Modeling the schema",id:"modeling-the-schema",children:[]},{value:"Localization",id:"localization",children:[]},{value:"Preview",id:"preview",children:[]},{value:"Walk-through",id:"walk-through",children:[{value:"1. Installing Contentful SDK",id:"1-installing-contentful-sdk",children:[]},{value:"2. Populating the app with fetched content",id:"2-populating-the-app-with-fetched-content",children:[]},{value:"3. Conditionally rendering DOM elements in case of preview",id:"3-conditionally-rendering-dom-elements-in-case-of-preview",children:[]},{value:"4. CMS Translations",id:"4-cms-translations",children:[]}]},{value:"Cache",id:"cache",children:[{value:"1. Contentful API rate limits",id:"1-contentful-api-rate-limits",children:[]},{value:"2. Custom Caching Layer",id:"2-custom-caching-layer",children:[]}]},{value:"Custom SEO",id:"custom-seo",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This recipe aims to guide you through the implementation of Contentful in the project and also provides custom solutions for different use-cases.  "),Object(i.b)("h3",{id:"what-is-a-cms"},"What is a CMS?"),Object(i.b)("p",null,"A CMS, or Content Management System, is a platform that helps in the creation and management of content to be consumed in a web application. In short, these services provide a database and a database management system with a layer of usability on top that makes them inclusive to users without technical expertise."),Object(i.b)("h3",{id:"contentful"},"Contentful"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.contentful.com/"}),"Contenful")," is one such CMS, and the object of this recipe."),Object(i.b)("p",null,"For more information about ",Object(i.b)("strong",{parentName:"p"},"Contentful"),"'s API please ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.contentful.com/developers/docs/"}),"refer to their documentation"),"."),Object(i.b)("h2",{id:"modeling-the-schema"},"Modeling the schema"),Object(i.b)("p",null,"As a developer working on the App that will consume the content stored in the CMS, you're also responsible for creating and modeling the schema itself. This will mean creating new content models that must be usable by the client team which will eventually handle ",Object(i.b)("strong",{parentName:"p"},"Contentful")," after the hand off of the project. One ",Object(i.b)("strong",{parentName:"p"},"major")," consideration to have is the usability and readability of the content models you're creating. Remember that they are meant to be usable without any previous technical knowledge of this context. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Contentful")," offers many options for type validations, input appearance and descriptions to help the users understand what kind of input is expected. You should use all of them to minimize the chance of users not understanding what's expected of them, in what ways they are limited, reducing the chances of unexpected content in your application."),Object(i.b)("p",null,"Keep in mind:"),Object(i.b)("p",null,"\u2192 Always use appropriate types when possible,"),Object(i.b)("p",null,"\u2192 Use validations where appropriate to make sure the input values are what the developer expects,"),Object(i.b)("p",null,"\u2192 Use meaningful titles and descriptions to ensure the user knows what's expected of that field."),Object(i.b)("h2",{id:"localization"},"Localization"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Contentful")," makes it easy to add localized content to your application. Once you define a locale, which you can do in the Locales option in the Settings menu, you can specify in each field you create whether they can be localized, in what languages, etc., giving you fine control over what needs to be localized and what doesn't. "),Object(i.b)("p",null,"Once having these locales, you can then use the ",Object(i.b)("strong",{parentName:"p"},"Contentful")," API signaling your desired locale through the ",Object(i.b)("inlineCode",{parentName:"p"},"locale")," field. You'll find an example of this in the next section."),Object(i.b)("h2",{id:"preview"},"Preview"),Object(i.b)("p",null,"Contentful splits content changes in 3 states:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Published")," : when a user saves some content."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Changed"),": when the user changes previously saved content but still hasn't saved the new one."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Draft"),": when the user creates new content but doesn't save.")),Object(i.b)("p",null,"Usually, only ",Object(i.b)("inlineCode",{parentName:"p"},"Published")," content is available, unless a specific request is done. This request is called ",Object(i.b)("inlineCode",{parentName:"p"},"Preview")," and may help users see beforehand how content would look like on their website before publishing it and making it available for every visitor."),Object(i.b)("p",null,"However, Contentful ",Object(i.b)("strong",{parentName:"p"},"does not validate content that is not published.")," This means that, if your app relies on validation from Contentful, ",Object(i.b)("strong",{parentName:"p"},"it will likely break in preview mode unless all content in Contentful already passes validation.")," This is assumed and must taken into account when developing your applications and communicated to potential users."),Object(i.b)("h2",{id:"walk-through"},"Walk-through"),Object(i.b)("h3",{id:"1-installing-contentful-sdk"},"1. Installing Contentful SDK"),Object(i.b)("p",null,"Using Contenful in your application can be done using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/contentful"}),"the ",Object(i.b)("strong",{parentName:"a"},"Contentful")," SDK available as an npm package"),", which you can install using the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save contenful\n")),Object(i.b)("p",null,"This SDK provides access to ",Object(i.b)("strong",{parentName:"p"},"Contentful"),"'s ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.contentful.com/developers/docs/references/content-delivery-api/"}),"Delivery API")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.contentful.com/developers/docs/references/content-preview-api/"}),"Preview API"),", both of which will be used in the integration of ",Object(i.b)("strong",{parentName:"p"},"Contentful")," in your app. "),Object(i.b)("p",null,"First, you'll need two ",Object(i.b)("strong",{parentName:"p"},"Contentful")," access tokens and a space identifier. All three can be found in the Settings menu, under the ",Object(i.b)("inlineCode",{parentName:"p"},"API keys")," option:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Space ID,"),Object(i.b)("li",{parentName:"ul"},"Delivery token,"),Object(i.b)("li",{parentName:"ul"},"Preview token;")),Object(i.b)("p",null,"Each token must be used together with their specific host, as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Delivery host: ",Object(i.b)("inlineCode",{parentName:"li"},"cdn.contentful.com"),","),Object(i.b)("li",{parentName:"ul"},"Preview host: ",Object(i.b)("inlineCode",{parentName:"li"},"preview.contentful.com"),";")),Object(i.b)("p",null,"Setting up the SDK can be done as follows: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createClient } from 'contentful';\n\nconst client = createClient({\n    space: // Space ID token\n    accessToken: // Either the Delivery token, or the Preview token\n    host: // Either the Delivery host, or the Preview host\n});\n")),Object(i.b)("p",null,"This ",Object(i.b)("inlineCode",{parentName:"p"},"client")," exposes the functions necessary to fetch the data in ",Object(i.b)("strong",{parentName:"p"},"Contentful"),", for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const result = await client.getEntries({ \n    content_type: 'clients',\n});\n")),Object(i.b)("p",null,"If you're taking advantage of localization in your ",Object(i.b)("strong",{parentName:"p"},"Contentful")," space, you must add to the request a field with your intended language code, like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const result = await client.getEntries({\n    content_type: 'clients',\n    locale: 'en-US'\n});\n")),Object(i.b)("h3",{id:"2-populating-the-app-with-fetched-content"},"2. Populating the app with fetched content"),Object(i.b)("p",null,"To populate the app with the fetched content, we will explore two possible implementations: one for bigger applications that justify the inclusion of a Redux store, and another which doesn't."),Object(i.b)("h4",{id:"21-accessing-the-client-directly-though-getinitialprops"},"2.1. Accessing the client directly though ",Object(i.b)("inlineCode",{parentName:"h4"},"getInitialProps")),Object(i.b)("p",null,"In Next.js apps, the ",Object(i.b)("inlineCode",{parentName:"p"},"getInitialProps")," function in general components typically receives a context object, which exposes many aspects of the context in which the page is rendered. Because we are building a custom app, and doing the work of running these ",Object(i.b)("inlineCode",{parentName:"p"},"getInitialProps")," functions ourselves, we can control what data they receive. In practice, we will be populating the context object with the information we want to propagate to our components. So, in your ",Object(i.b)("inlineCode",{parentName:"p"},"App.js")," file, you can check whether the page was loaded with a ",Object(i.b)("inlineCode",{parentName:"p"},"cms-preview")," query parameter, build your client, and share it across the app."),Object(i.b)("p",null,"This function also has the advantage letting you return props to your App function, making it easier to signal the App itself if you're in preview mode."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// App.js\nimport { createClient } from 'contentful';\n\nApp.getInitialProps = async ({Component, context, router}) => {\n    \n    // Check whether route has `cms-preview` query parameter\n    const isPreviewingContentful = Object.hasOwnProperty.call(router.query, 'cms-preview');\n\n    // Set the preview or regular host\n    const contentfulHost = isPreviewingContentful ? 'preview.contentful.com' : 'cdn.contentful.com';\n\n    // Create client with correct host\n    const client = createClient({\n        space: process.env.CONTENTFUL_SPACE_ID,\n        accessToken: process.env.CONTENTFUL_TOKEN, // Delivery API Token\n        host: contentfulHost, // Delivery API host\n    });\n    \n    // Append it to the context object so other Components can access it\n    context.contentfulClient = client;\n\n    let pageProps = {}\n\n    if (Component.getInitialProps) {\n        pageProps = await Component.getInitialProps(context);\n    }\n    \n    // Return the state here to receive as a prop,\n    // allowing you to conditionally render a DOM element in case of preview\n    return { pageProps, isPreviewingContentful }\n};\n")),Object(i.b)("p",null,"Afterwards, you can use the ",Object(i.b)("strong",{parentName:"p"},"Contentful")," client in your component's ",Object(i.b)("inlineCode",{parentName:"p"},"getInitialProps")," to fetch content required for that component."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// UseCases.js\n\nUseCases.getInitialProps = async (context) => {\n\n    const { contentfulClient } = context;\n\n    // Fetch data from Contentful\n    const entries = await contentfulClient.getEntries({\n        content_type: 'useCase',\n    });\n\n    // Return result as props\n    return { entries }\n};\n")),Object(i.b)("h4",{id:"22-using-redux"},"2.2. Using Redux"),Object(i.b)("p",null,"When using Next.js, you can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kirill-konshin/next-redux-wrapper"}),"next-redux-wrapper")," to integrate Redux in your application. We will be using this wrapper as part of this walkthrough, but will not cover its integration.  For more detailed information on this package, e.g. how to install it, please refer to its documentation."),Object(i.b)("p",null,"As part of using this package, you'll have to create a function (which we'll call ",Object(i.b)("inlineCode",{parentName:"p"},"buildStore")," ) which should return the instance of the Redux store in your application, and it will be here that you will create your ",Object(i.b)("inlineCode",{parentName:"p"},"client")," instance, and decide whether it should fetch published or preview content. "),Object(i.b)("p",null,"Given the nature of Next.js and the implementation of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kirill-konshin/next-redux-wrapper"}),"next-redux-wrapper"),", ",Object(i.b)("inlineCode",{parentName:"p"},"buildStore")," will run twice, once server-side and once client-side, requiring you to consistently instantiate the ",Object(i.b)("inlineCode",{parentName:"p"},"client")," to be the same for both cases. But the same strategy cannot be used for both. Each requires its own solution. "),Object(i.b)("p",null,"In the following example we will be checking the presence of a ",Object(i.b)("inlineCode",{parentName:"p"},"cms-preview")," query parameter to decide whether to show preview content or the standard, published content, i.e. something like ",Object(i.b)("inlineCode",{parentName:"p"},"www.example.com/?cms-preview"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// buildStore.js\nimport { createClient } form 'contentful';\nimport { applyMiddleware, createStore } from 'redux';\nimport thunkMiddleware from 'redux-thunk';\n\nexport const buildStore = (initialState, { query }) => {\n    \n    // Instantiate standard client by default\n    let client = createClient({\n        space: process.env.CONTENTFUL_SPACE_ID,\n        accessToken: process.env.CONTENTFUL_TOKEN, // Delivery API Token\n        host: 'cdn.contentful.com', // Delivery API host\n    });\n\n    if (\n        // For server-side, check wether `query` exists and has the `cms-preview` key\n        (typeof query !== 'undefined' && Object.hasOwnProperty.call(query, 'cms-preview')) ||\n        // For client-side, check wether `window` exist and has the `cms-preview` query parameter\n        (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('cms-preview'))\n    ) {\n        // In a positive case, switch the client instance to access the Preview API instead     \n        client = createClient({\n            space: process.env.CONTENTFUL_SPACE_ID,\n            accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN, // Preview API Token\n            host: 'preview.contentful.com', // Preview API host\n        });\n    }\n\n    const reducer = {\n        // Example reducer\n    };\n    \n    // Add client as a thunk middleware\n    // This will give us access to the `client` object in our action functions as an argument\n    const middlewares = applyMiddleware(thunkMiddleware.withExtraArgument({ client }));\n\n    return createStore(reducer, initialState, middlewares);\n    }\n}\n\nexport default buildStore;\n")),Object(i.b)("p",null,"Then, in your actions scripts, you can use the provided client to fetch the content that you need, like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// usecases/actions.js\n// Create a fetch action that fetches data from Contentful\nconst fetch = () => async (dispatch, getState, { client }) => {\n    dispatch({ type: 'Fetching'})\n\n    try {\n        // Fetch content that are instances of `useCase` content model, in Spanish\n        const result = await client.getEntries({\n            content_type: 'useCase',\n            locale: 'es-ES',\n        })\n\n        // The incoming object will be fairly complex, and it's recommended to build\n        // a more conveniently structured object here so that other scrips in the pipeline\n        // can avoid handling that complexity and can instead enjoy a simpler, custom built object.\n        // E.G.\n        const entries = result.items\n            .map((item)=> ({\n                title: item.fields.title,\n                description: item.fields.description,\n                weight: item.fields.weight,\n        })).sort((a, b) => b.weight - a.weight);\n\n        dispatch({\n            type: 'Success',\n            payload: { entries },\n        })\n    } catch (error) {\n        dispatch({\n            type: 'Failure',\n            payload: { error },\n        });\n    }\n};\n")),Object(i.b)("h3",{id:"3-conditionally-rendering-dom-elements-in-case-of-preview"},"3. Conditionally rendering DOM elements in case of preview"),Object(i.b)("p",null,"Since we're on the topic, you must use a similar strategy in your ",Object(i.b)("inlineCode",{parentName:"p"},"App.js")," file to conditionally render a DOM element to let the user know they are in a preview state. This must happen once per instance of the App, since we will not perpetuate the ",Object(i.b)("inlineCode",{parentName:"p"},"cms-preview")," query parameter on route changes."),Object(i.b)("p",null,"Class component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// App.js\nclass App extends Nextapp {\n    state = {\n        isPreviewingContentful = false,\n    };\n\n    // Using the componentWillMount() lifecycle function guarantees that this runs only once per instance of App\n    componentWillMount() {\n        const { router } = this.props;\n\n        this.setState({\n            isPreviewingContentful: Object.hasOwnProperty.call(router.query, 'cms-preview');\n        });\n    }\n\n    render() {\n        return (\n            (...)\n                { this.isPreviewingContentful && <ContentfulPreview> }\n            (...)\n        );\n    }\n}\n")),Object(i.b)("p",null,"Using hooks: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// App.js\nconst App = ({ Component, pageProps, rootSelector, router }) => {\n    const [isPreviewingContentful, setIsPreviewingContentful] = useState(false);\n    \n    // Using a useEffect hook with no dependencies guaranties that it fires only once per instance of App\n    useEffect(() => setIsPreviewingContentful(Object.hasOwnProperty.call(router.query, 'cms-preview')), []);\n\n    return (\n        (...)\n            { this.isPreviewingContentful && <ContentfulPreview> }\n        (...)\n    );\n}\n")),Object(i.b)("h3",{id:"4-cms-translations"},"4. CMS Translations"),Object(i.b)("p",null,"This boilerplate already includes ",Object(i.b)("strong",{parentName:"p"},"Internationalization")," using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-intl"}),Object(i.b)("inlineCode",{parentName:"a"},"@moxy/next-intl")),", this is done by statically configuring individual ",Object(i.b)("inlineCode",{parentName:"p"},"intl/messages/<locale>.json")," per locale. You can do this dynamically by moving this static files to a ",Object(i.b)("strong",{parentName:"p"},"Contentful")," content model and by enabling localization in it."),Object(i.b)("h4",{id:"1-defining-the-content-type"},"1. Defining the content type"),Object(i.b)("p",null,"Firstly, define the content type that will consist on a list of key/value pairs. Add the fields necessary to fit your needs, for example ",Object(i.b)("inlineCode",{parentName:"p"},"homePageTitle"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u2139\ufe0f Make sure that you enable localization on every field you set in your content type.")),Object(i.b)("p",null,"After creating your content type populate the respective fields accordingly."),Object(i.b)("h4",{id:"2-overriding-moxynext-intl"},"2. Overriding ",Object(i.b)("a",Object(a.a)({parentName:"h4"},{href:"https://github.com/moxystudio/next-intl"}),Object(i.b)("inlineCode",{parentName:"a"},"@moxy/next-intl"))),Object(i.b)("p",null,"Now that you have your content type set you should update the ",Object(i.b)("inlineCode",{parentName:"p"},"/intl/index.js")," file to fetch the data from ",Object(i.b)("strong",{parentName:"p"},"Contentful"),". This is done by using the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/contentful"}),Object(i.b)("strong",{parentName:"a"},"Contentful")," SDK"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"locales: [\n    {\n        id: 'en-US',\n        name: 'English',\n        loadMessages: async () => {\n            const content = await client.getEntries({\n                content_type: 'genericTranslations',\n                locale: 'en-US',\n                // The parameter bellow is needed to avoid the problem described at the top of the file.\n            });\n\n            return content.items[0].fields;\n        },\n    },\n],\n")),Object(i.b)("h2",{id:"cache"},"Cache"),Object(i.b)("h3",{id:"1-contentful-api-rate-limits"},"1. Contentful API rate limits"),Object(i.b)("p",null,"API Rate limits specify the maximum number of requests a client can make to Contentful APIs in a specific time frame. Every request counts against a per second rate limit."),Object(i.b)("p",null,"Currently, Contentful doesn't enforce any limits on requests that hit their CDN cache. For requests that do hit the Content Delivery API enforces rate limits of 78 requests per second."),Object(i.b)("p",null,"When a client gets rate limited, the API responds with the ",Object(i.b)("inlineCode",{parentName:"p"},"429 Too Many Requests")," status code and sets the ",Object(i.b)("inlineCode",{parentName:"p"},"X-Contentful-RateLimit-Reset")," header that tells the client when it can make its next request. "),Object(i.b)("h3",{id:"2-custom-caching-layer"},"2. Custom Caching Layer"),Object(i.b)("p",null,"One preventive measure to avoid hitting the rate limit for Contentful is to implement your own custom caching layer.\nThis can be done by setting up a proxy server which will add an ",Object(i.b)("inlineCode",{parentName:"p"},"s-maxage")," HTTP header into the Contentful's response."),Object(i.b)("p",null,"This header will then be interpreted by the ",Object(i.b)("em",{parentName:"p"},"CDN")," that is delivering the application (for example ",Object(i.b)("em",{parentName:"p"},"CloudFlare"),"), which will cache the response and avoid repeating the same request to Contentful during a specified time interval."),Object(i.b)("p",null,"The first thing you'll need in order to implement this solution is to install ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/http-proxy"}),"http-proxy"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ npm i http-proxy\n")),Object(i.b)("p",null,"Then, you'll want to create an endpoint in your application which will serve as a proxy for all the requests directed at Contentful's API."),Object(i.b)("p",null,"For this, you'll have to create the file ",Object(i.b)("inlineCode",{parentName:"p"},"pages/api/cms/[...cms].js"),". This file/directory structure and naming is important because you'll want to receive any requests directed to ",Object(i.b)("inlineCode",{parentName:"p"},"<hostname>/api/cms/*"),"."),Object(i.b)("p",null,"This endpoint will create the ",Object(i.b)("inlineCode",{parentName:"p"},"proxy")," server and, on each request, remove ",Object(i.b)("inlineCode",{parentName:"p"},"/api/cms")," from the request, rewrite the ",Object(i.b)("inlineCode",{parentName:"p"},"host")," header to the correct host (",Object(i.b)("inlineCode",{parentName:"p"},"cdn.contentful.com"),"), redirect the request to ",Object(i.b)("inlineCode",{parentName:"p"},"cdn.contentful.com")," and set the ",Object(i.b)("inlineCode",{parentName:"p"},"Cache-Control")," HTTP header of the response to ",Object(i.b)("inlineCode",{parentName:"p"},"s-maxage=60"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import httpProxy from 'http-proxy';\n\nconst proxy = httpProxy.createProxyServer({});\n\nexport default (req, res) => {\n    req.url = req.url.replace('/api/cms', '');\n    req.headers.host = 'cdn.contentful.com';\n\n    proxy.web(req, res, {\n        target: {\n            host: 'cdn.contentful.com',\n        },\n    });\n\n    if (req.method === 'GET') {\n        res.setHeader('Cache-Control', 's-maxage=60');\n    }\n};\n")),Object(i.b)("p",null,"Finally, you will need to setup the Contentful client to direct it's requests to the endpoint you just configured. Please note that you only want to cache the requests when in a production environment."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const clientOptions = {\n    space: process.env.CONTENTFUL_SPACE_ID,\n    accessToken: process.env.CONTENTFUL_TOKEN,\n};\n\nif (process.env.NODE_ENV === 'production') {\n    clientOptions.host = process.env.SITE_URL;\n    clientOptions.basePath = '/api/contentful';\n}\n\nconst client = createClient(clientOptions);\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTES:")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u2757\ufe0f You have to be able to access to ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," from the client side as well as the server side, to proxy client side requests to Contentful in production environments.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u2757\ufe0f The ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.SITE_URL")," variable has to be correctly configured and accessible from both server and client side, otherwise the request to the proxy endpoint will not happen correctly. This may mean that preview url's in merge request will not function correctly, which will happen if the application is started with ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," set to ",Object(i.b)("inlineCode",{parentName:"p"},"production"),".")),Object(i.b)("h2",{id:"custom-seo"},"Custom SEO"),Object(i.b)("p",null,"There may be cases where you will want to configure custom SEO per page. Unfortunately, Contentful does not provide out-of-the-box SEO support, so you will need to implement your own strategy. The approach we suggest is the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a content model for SEO."),Object(i.b)("li",{parentName:"ul"},"Add a field ",Object(i.b)("inlineCode",{parentName:"li"},"Title"),' that should be only used to identify the model, e.g. "Homepage SEO".'),Object(i.b)("li",{parentName:"ul"},"Add a SEO field (json) to the model. Here, the SEO related tags (title, meta, etc.) will be defined in a ",Object(i.b)("em",{parentName:"li"},"json")," format like so:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "title": "MyPage Title",\n    "meta": [\n        {\n            "name": "description",\n            "content":"MyPage Description",\n        },\n        {\n            "property": "og:title",\n            "content": "MyPage Title",\n        },\n        {\n            "property": "og:image",\n            "content": {\n                "id": "6fU8dkL1P9eZlPE9JPw89n"\n            }\n        }\n    ],\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add a SEO Assets field (many file, media input) to the model."),Object(i.b)("li",{parentName:"ul"},"Create a link field type in the models you need SEO and link it to the model you just created.")),Object(i.b)("p",null,"The resulting content model should look like this."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"../../static/img/SEO%20content%20model.png",alt:"SEO Content Model"}))),Object(i.b)("p",null,"In order to obtain the ",Object(i.b)("inlineCode",{parentName:"p"},"id")," used for meta tags whose content is an asset, you need to select the asset entry and, on the right side panel of the asset, select ",Object(i.b)("strong",{parentName:"p"},"Info")," and copy the ",Object(i.b)("strong",{parentName:"p"},"id"),". Later in the application you'll use this ",Object(i.b)("strong",{parentName:"p"},"id")," to generate the URL for the asset."),Object(i.b)("p",null,"On the application itself, the steps to customize the SEO are the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Define a ",Object(i.b)("em",{parentName:"li"},"default")," SEO data."),Object(i.b)("li",{parentName:"ul"},"Render the ",Object(i.b)("em",{parentName:"li"},"default")," SEO data in the ",Object(i.b)("inlineCode",{parentName:"li"},"App.js")," file using ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@moxy/next-seo"}),"@moxy/next-seo")," (outside the ",Object(i.b)("inlineCode",{parentName:"li"},"Head")," tag)."),Object(i.b)("li",{parentName:"ul"},"Fetch page data as you normally would."),Object(i.b)("li",{parentName:"ul"},"Obtain the SEO data from the Contentful page data (example code for the Contentful SEO ",Object(i.b)("em",{parentName:"li"},"parser"),")")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { mapValues } from 'lodash';\n\n// This function will determine if a meta entry's content is an id\n// If it is, it obtains the url to the asset that matches the id\n// Otherwise it returns the content \n\nconst getContent = (content, assets) => {\n    if (isPlainObject(content)) {\n        const asset = assets.find(({ sys }) => sys.id === content.id);\n\n        return asset.fields.file.url.slice(2);\n    }\n\n    return content;\n};\n\n// Provided with the result from the Contentful API call and the entryID for the current page content,\n// This function will extract the SEO data, and complete it with the URL of any needed asset.\n\nconst parseContentfulSEO = (contentfulData, entryID) => {\n    const entry = contentfulData.items.find((item) => item.sys.id === entryID);\n    const seoID = entry.fields.seo.id;\n    const seoEntry = entry.includes.Entry.find((entry) => entry.sys.id === seoID);\n    let seoContent;\n\n    try {\n        seoContent = JSON.parse(seoEntry.fields.seo);\n    } catch (parsingError) {\n        console.err('Unvalid JSON in SEO content');\n        console.err(parsingError);\n        return;\n    }\n\n    // Convert every content: { id: ''} into a content: url, keep unchanged otherwise\n    const content = {\n        title: seoContent.title,\n        meta: seoContent.meta.map((entry) => mapValues(entry, (value) => getContent(value, contentfulData.includes.Asset)))\n        link: seoContent.link.map((entry) => mapValues(entry, (value) => getContent(value, contentfulData.includes.Asset)))\n    }\n\n    return content;\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Render the SEO data (title and tags) in the ",Object(i.b)("inlineCode",{parentName:"li"},"App.js")," file using ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@moxy/next-seo"}),"@moxy/next-seo")," (outside the ",Object(i.b)("inlineCode",{parentName:"li"},"Head")," tag).")),Object(i.b)("p",null,"We use this module for the rendering of meta tags as it takes care of two concerns:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Discards any repeated meta tags."),Object(i.b)("li",{parentName:"ul"},"Renders any ",Object(i.b)("inlineCode",{parentName:"li"},"title"),", ",Object(i.b)("inlineCode",{parentName:"li"},"meta")," and ",Object(i.b)("inlineCode",{parentName:"li"},"link")," tags inside an ",Object(i.b)("inlineCode",{parentName:"li"},"Head")," tag.")))}p.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,d=u["".concat(r,".").concat(h)]||u[h]||b[h]||i;return n?o.a.createElement(d,l({ref:t},s,{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);