import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react"
import Button, { ButtonSize, ButtonType } from "./Button"

export default{
    title:"Example/Button1",
    component:Button
}as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => {
    return(
        <Button {...args}>button</Button>
    )
}

export const DefaultButton = ButtonTemplate.bind({});
DefaultButton.args = {
    buttonSize:ButtonSize.Large,
    buttonType:ButtonType.Danger

};