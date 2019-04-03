import React from 'react';
import stylesheet from 'antd/dist/antd.min.css'
import { Layout } from 'antd';

import PageLayout from '../components/pageHeader/PageLayout';
import Home from '../components/home/Home';

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <PageLayout>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <Home />
                </PageLayout>
            </Layout>
        )
    }
}
