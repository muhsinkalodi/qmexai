import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';

const regions = {
    in: { country: 'India', code: 'en-IN', title: 'Top AI Startup & Web Development in India', desc: 'Qmexai: Leading provider of scalable Web Apps, AI Solutions, and Digital Marketing across India (Chennai, Delhi, Mumbai, Bangalore).' },
    ae: { country: 'UAE', code: 'en-AE', title: 'Best Software Company in Dubai | Qmexai', desc: 'Top-tier Web Apps, Mobile Apps, and Custom AI Solutions tailored for businesses in Dubai and across the UAE.' },
    kw: { country: 'Kuwait', code: 'en-KW', title: 'Premier Software & AI Solutions in Kuwait', desc: 'Qmexai delivers cutting-edge Web Development and AI Solutions for enterprises in Kuwait.' },
    sa: { country: 'Saudi Arabia', code: 'en-SA', title: 'Leading Software Development Company in Saudi Arabia', desc: 'Empowering Saudi Arabia with Custom AI Solutions, Web Apps, and Mobile App Development by Qmexai.' },
    qa: { country: 'Qatar', code: 'en-QA', title: 'Top IT Services & AI Solutions in Qatar', desc: 'Driving digital transformation in Qatar with Qmexai\'s elite Web Development and CRM Systems.' },
    ru: { country: 'Russia', code: 'ru-RU', title: 'Лучшая IT-компания и ИИ-решения | Qmexai', desc: 'Qmexai предлагает передовые решения в области веб-разработки, мобильных приложений и искусственного интеллекта для бизнеса в России.' },
    us: { country: 'USA', code: 'en-US', title: 'Best Custom Software & AI Development in USA', desc: 'Qmexai crafts premium Web Applications, AI Algorithms, and Mobile Apps for United States businesses.' },
    ar: { country: 'Argentina', code: 'es-AR', title: 'La Mejor Empresa de Software y Desarrollo de IA | Qmexai', desc: 'Qmexai ofrece desarrollo de aplicaciones web, aplicaciones móviles y soluciones de IA personalizadas en Argentina.' },
    za: { country: 'Africa', code: 'en-ZA', title: 'Top Software & Web Development Company in Africa', desc: 'Qmexai delivers innovative Web Apps, AI Solutions, and CRM Systems across the African continent.' },
    kr: { country: 'Korea', code: 'ko-KR', title: '최고의 소프트웨어 및 AI 개발 회사 | Qmexai', desc: 'Qmexai는 한국 기업을 위한 맞춤형 웹 애플리케이션, 모바일 앱 및 디지털 마케팅 솔루션을 제공합니다.' },
    my: { country: 'Malaysia', code: 'en-MY', title: 'Leading Web Development & AI Solutions in Malaysia', desc: 'Elevate your business in Malaysia with Qmexai\'s premium Web Apps and Digital Marketing.' },
    sg: { country: 'Singapore', code: 'en-SG', title: 'Best Software & AI Company in Singapore', desc: 'Qmexai brings world-class Web Development and Custom AI to businesses in Singapore.' },
    lk: { country: 'Sri Lanka', code: 'en-LK', title: 'Top Web & Software Development in Sri Lanka', desc: 'Transforming businesses in Sri Lanka with Qmexai\'s advanced Web Apps, Branding, and AI.' },
    default: { country: 'Global', code: 'en', title: 'Qmexai | Leading Web Development & AI Solutions | Global', desc: 'Qmexai delivers top-tier Web Apps, Mobile Apps, Branding, AI, and Digital Marketing globally.' }
};

const GlobalSEO = () => {
    const { region } = useParams();
    const location = useLocation();
    const currentRegion = regions[region] || regions.default;

    // Clean pathname by removing trailing slash
    const cleanPathname = location.pathname.endsWith('/') && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    let currentPath = cleanPathname;
    const regionMatch = currentPath.match(/^\/([a-z]{2})(?:\/|$)/);

    if (regionMatch && regions[regionMatch[1]] && regionMatch[1] !== 'default') {
        currentPath = currentPath.substring(3);
        if (!currentPath.startsWith('/')) {
            currentPath = '/' + currentPath;
        }
    }

    const baseUrl = 'https://www.qmexai.com';
    const pathSuffix = currentPath === '/' ? '' : currentPath;

    // Build the resolved canonical URL for the *current* page correctly
    const canonicalPath = region && regions[region] && region !== 'default'
        ? `/${region}${pathSuffix}`
        : pathSuffix;
    const canonicalUrl = `${baseUrl}${canonicalPath}`;

    return (
        <Helmet>
            {/* Title & Meta Descriptions */}
            <title>{currentRegion.title}</title>
            <meta name="description" content={currentRegion.desc} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={currentRegion.title} />
            <meta property="og:description" content={currentRegion.desc} />

            {/* Dynamic Canonical */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Hreflang Tags for Geographic Targeting */}
            <link rel="alternate" hreflang="x-default" href={`${baseUrl}${pathSuffix}`} />
            <link rel="alternate" hreflang="en" href={`${baseUrl}${pathSuffix}`} />

            {Object.entries(regions).filter(([key]) => key !== 'default').map(([key, data]) => {
                const url = `${baseUrl}/${key}${pathSuffix}`;
                // Adding specific language-country variations
                return (
                    <link key={key} rel="alternate" hreflang={data.code} href={url} />
                );
            })}
            {/* Specific language fallbacks or alternate combinations */}
            <link rel="alternate" hreflang="ar-ae" href={`${baseUrl}/ae${pathSuffix}`} />
            <link rel="alternate" hreflang="ar-sa" href={`${baseUrl}/sa${pathSuffix}`} />
            <link rel="alternate" hreflang="ar-kw" href={`${baseUrl}/kw${pathSuffix}`} />
            <link rel="alternate" hreflang="ar-qa" href={`${baseUrl}/qa${pathSuffix}`} />
        </Helmet>
    );
};

export default GlobalSEO;
