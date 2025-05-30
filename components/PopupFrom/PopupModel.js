import { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import RegisterForm from "./RegisterForm";

const PopupModel = (props) => {

    const { open, handleOpen, heading,typeAcc } = props

    return (
        <>
            <Dialog
                open={open}
                size="md"
                className="min-w-[94%] lg:min-w-[600px] inline-block box-border"
                handler={handleOpen}
            >
                <DialogHeader className="text-[#0A438D] text-[18px]">
                    {heading()}
                </DialogHeader>
                <DialogBody divider>
                    <RegisterForm handleOpen={handleOpen} typeAcc={typeAcc}/>
                </DialogBody>
            </Dialog>
        </>
    )
}

export default PopupModel