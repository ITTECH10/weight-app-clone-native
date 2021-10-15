import React from 'react'
import { Icon } from "@ui-kitten/components"

export const RightArrowIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 30, height: 30 }]} name="chevron-right" pack="material-community" />
)

export const ThemesIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 25, height: 25 }]} name="compare" pack="material-community" />
)

export const SetGoalIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 25, height: 25 }]} name="trophy-outline" pack="material-community" />
)