import React from 'react';
import TableOfContents from './TableOfContents';
import Profile from './Profile';
import Gallery from './Gallery';
import TodoList from './TodoList';
import Avatar from './Avatar';
import PackingList from './PackingList';
import List from './List';
import Recipes from './Recipes';
import TeaSet from './TeaSet';
import TeaGathering from './TeaGathering';

function TerceiraSemana() {
    return (
        <div>
            <TableOfContents />
            <Profile />
            <Gallery />
            <TodoList />
            <Avatar />
            <PackingList />
            <List />
            <Recipes />
            <TeaSet />
            <TeaGathering />
        </div>
    );
}

export default TerceiraSemana;
