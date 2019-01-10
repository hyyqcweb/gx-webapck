import pathToRegexp from 'path-to-regexp';

export default {
    namespace: 'app',
    state: {
        List: [],
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                const match = pathToRegexp('/').exec(pathname);
                if (match) {
                    dispatch({type: 'query'});
                }
            });
        },
    },
    effects: {
        * query({payload}, {call, put}) {
            console.log(1);
        },
    },
    reducers: {},
}
