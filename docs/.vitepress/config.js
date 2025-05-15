import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'mz-repo 문서',
    description: 'pnpm + turborepo + vue 기반 monorepo 문서',
    base: '/docs/',
    themeConfig: {
        nav: [
            { text: 'home', link: '/' },
            { text: 'guide', link: '/guide/' },
            { text: 'storybook', link: '/storybook/' }
        ],
        sidebar: [
            { text: 'home', link: '/' },
            { text: '시작하기', link: '/getting-started' },
            {
                text: 'guide',
                items: [
                    { text: '가이드 섹션 메인', link: '/guide/' },
                    { text: '설치 가이드', link: '/guide/install' },
                    { text: '사용법 가이드', link: '/guide/usage' }
                ]
            },
            {
                text: 'storybook',
                items: [
                    { text: '스토리북 섹션 메인', link: '/storybook/' },
                    { text: '사용법 가이드', link: '/storybook/usage' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/mz-pos/ux' }
        ]
    }
})