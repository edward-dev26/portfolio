import React from 'react';
import style from './ProfileNavigation.module.css';
import {Button, Col, Row} from 'antd';
import {CloseOutlined, MessageOutlined, PlusOutlined} from '@ant-design/icons/lib';
import TabsNavigation from '../../common/tabs-navigation/TabsNavigation';
import {url} from '../../../utils/routeManager';
import {TId} from '../../../types/types';

type PropsType = {
    isMyProfile: boolean
    userId: TId | null
    followed: boolean
}

const ProfileNavigation: React.FC<PropsType> = ({isMyProfile, followed, userId}) => {
    const params = {userId: isMyProfile ? null : userId};

    const navItems = [
        {title: 'Timeline', href: url('profile:timeline', params)},
        {title: 'About', href: url('profile:about', params)},
        {title: 'Photos', href: url('profile:photos', params)},
        {title: 'Videos', href: url('profile:videos', params)}
    ];

    return (
        <Row className={style.profile__navigation}>
            <Col span={15} className={style.nav}>
                <TabsNavigation navItems={navItems}/>
            </Col>
            <Col span={9} className={style.navBtns}>
                {!isMyProfile && (
                    <>
                        <Button type='primary'><MessageOutlined/>Send message</Button>
                        {
                            followed
                                ? <Button type='primary' danger><CloseOutlined/>Remove friend</Button>
                                : <Button type='primary'><PlusOutlined/>Add to friend</Button>
                        }
                    </>
                )}
            </Col>
        </Row>
    )
};

export default ProfileNavigation;