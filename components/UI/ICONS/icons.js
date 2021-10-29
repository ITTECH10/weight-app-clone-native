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

export const DeleteIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 25, height: 25, color: 'red' }]} name="delete-outline" pack="material-community" />
)

export const VideoTutorialIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 25, height: 25 }]} name="video-stabilization" pack="material-community" />
)

export const PrivacyPolicyIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 25, height: 25 }]} name="text-box-multiple-outline" pack="material-community" />
)
