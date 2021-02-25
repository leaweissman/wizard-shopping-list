import { GlobalStyles } from './GlobalStyles';

const StyleGuideWrapper = ({ children }) => {
    return {
        <>
        <GlobalStyles />
    { children }
        </>
}
}