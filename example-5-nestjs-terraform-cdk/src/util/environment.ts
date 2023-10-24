const isDev = () => process.env.NODE_ENV == 'dev'
const onlyDev = (content: any, other: any) => isDev() ? content : other

export { isDev, onlyDev }

