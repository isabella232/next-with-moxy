import { useIntl } from 'react-intl';

export const useSeoData = () => {
    const intl = useIntl();

    const title = intl.formatMessage({ id: 'terms.seo.title' });
    const description = intl.formatMessage({ id: 'terms.seo.description' });
    const keywords = intl.formatMessage({ id: 'terms.seo.keywords' });

    return {
        title,
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            /* Facebook & search engines */
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            /* Twitter */
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
        ],
    };
};
