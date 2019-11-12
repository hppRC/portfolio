import React from 'react';
import { Layout } from '../layouts';
import { Works } from '../internal/works';
import styled from '@emotion/styled';
import { PageBaseTheme } from '../themes';

const Theme = styled(PageBaseTheme)``;

export default () => (
    <Layout>
        <Theme>
            <Works />
        </Theme>
    </Layout>
);
