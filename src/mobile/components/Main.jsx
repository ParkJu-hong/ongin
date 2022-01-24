import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import MainPage from './MainPage';
import Gallery from './Gallery';
import About from './About';
// import Comments from './Comments';
import ForChaerin from './ForChaerin';

function Main() {

    return (
        <>
            <Switch >
                {/* 안되서 /ongin으로 바꿔보았찌만 되지 않았다. 
                    githubpage에서 작동함
                    https 가  http인 서버에 요청하면 안되기 때문에
                    도메인을 사서 route53의 네임서버를 연결하고 ec2의 서버와 도메인을 연결할 수 있도록
                    하고 있는데 생각대로 잘 되지 않는다.
                */}
                <Route exact path="/ongin">
                    <MainPage />
                </Route>
                <Route path="/ongin/spring">
                <Gallery season={'spring'}/>
                </Route>
                <Route path="/ongin/summer">
                <Gallery season={'summer'}/>
                </Route>
                <Route path="/ongin/autumn">
                    <Gallery season={'autumn'}/>
                </Route>
                <Route path="/ongin/winter">
                <Gallery season={'winter'}/>
                </Route>
                <Route path="/ongin/point">
                <Gallery season={'point'}/>
                </Route>
                <Route path="/About">
                    <About text='about'/>
                </Route>
                <Route path="/Contact">
                    <About text='crfaceit@gmail.com'/>
                </Route>
                <Route path="/Shop">
                    <About text='shop'/>
                </Route>
                <Route path='/ongin/forchaerin'>
                    <ForChaerin />
                </Route>
                {/* <Route path="/comments">
                    <Comments />
                </Route> */}
            </Switch>
        </>
    )
}

export default Main

/*
            {id: 1, title: 'About'},
        {id: 2, title: 'Gallery'},
        {id: 3, title: 'Shop'},
        {id: 4, title: 'Contact'}
*/