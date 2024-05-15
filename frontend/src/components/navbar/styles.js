export const navbarStyles = {
    drawer: {
        width: 320,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            backgroundColor: '#00ce9a'
        },
        '& .Mui-selected': {
            color: 'red',
        },
    },
    icons: {

        marginLeft: '20px',
        fontsize: "large"
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
        }
    }
};