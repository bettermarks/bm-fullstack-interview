import React, {ReactElement, ReactNode} from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3AF;
    padding: 0 10px;
    height: 60px;
    width: 80px;
`;

const NavItemName = styled.span`
    color: white;
    font-size: 10px;
`;

const NavItemIcon = styled.span`
    padding: 5px 0;
`;

export const NavItem: React.FC<{name: string, icon: ReactNode}> = ({name, icon}) => (
    <StyledNavItem>
        <NavItemIcon>{icon}</NavItemIcon>
        <NavItemName>{name}</NavItemName>
    </StyledNavItem>
);