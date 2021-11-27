import styled from "styled-components";


export const HomeStyled = styled.article`
    .main-portrait { width : 80px; }

    .name {
        font-size   : 8em;
        line-height : 1;
    }

    #grid-wrapper {
        display               : grid;
        grid-template-columns : repeat(auto-fill, minmax(320px, 50vw));
    }

    .one-third {
        min-height : 480px;
    }

    #title-card {
        display         : flex;
        flex-direction  : column;
        justify-content : space-between;
        height          : calc(80vh - 2px);
        margin-bottom   : 2px;
    }

    .grid-item {
        padding : 40px;
        width   : calc(100% - 2px);
        height  : calc(100% - 2px);
    }

    #dots {
        letter-spacing : 0;
    }
`;
