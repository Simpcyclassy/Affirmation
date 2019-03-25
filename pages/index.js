import React from 'react';
import stylesheet from 'antd/dist/antd.min.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import DailyAffirmations from '../components/DailyAffirmations';

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <DailyAffirmations />
            </Layout>
        )
    }
}
