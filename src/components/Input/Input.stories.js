import React from "react"
import Input from "./Input"

export default {
  title: "Form/Input",
  component: Input
}

export const Small = () => <Input variant="small" placeholder="Small size" />
export const Medium = () => <Input variant="medium" placeholder="Medium size" />
export const Large = () => <Input variant="large" placeholder="Large size" />

Small.storyName = "Small Input"