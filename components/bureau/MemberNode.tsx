// components/bureau/MemberNode.tsx
'use client';

import { memo, useState } from 'react';
import { Handle, Position, NodeProps, Node } from '@xyflow/react';
import { motion, AnimatePresence } from 'framer-motion';

import {
    Mail,
    Phone,
    MessageCircle,
    ChevronDown,
} from "lucide-react";

import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { Member } from "@/components/bureau/types";


type MemberNodeData = {
    member: Member;
};

type MemberNodeType = Node<MemberNodeData>;


const MemberNode = ({ data }: NodeProps<MemberNodeType>) => {
    const { member } = data;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <Handle
                type="target"
                position={Position.Top}
                className="!bg-blue-500 !w-3 !h-3 !border-2 !border-white"
            />


            {/* Node principal */}
            <motion.div
                className="
                    relative bg-white dark:bg-gray-800
                    rounded-xl shadow-lg
                    hover:shadow-2xl
                    transition-all duration-300
                    cursor-pointer
                    border border-gray-200 dark:border-gray-700
                    min-w-[180px]
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >

                <div className="p-4 text-center">

                    <div className="relative mx-auto mb-3 w-16 h-16">

                        <div className="
                            absolute inset-0 rounded-full
                            bg-gradient-to-br from-blue-500 to-purple-600
                            opacity-20 blur-sm
                        "/>

                        <img
                            src={
                                member.photo ||
                                `https://ui-avatars.com/api/?name=${member.name}`
                            }
                            alt={member.name}
                            className="
                                relative w-16 h-16
                                rounded-full
                                object-cover
                                border-2 border-gray-200
                            "
                        />

                    </div>


                    <h3 className="font-bold text-gray-800 dark:text-white text-sm">
                        {member.name}
                    </h3>


                    <p className="text-xs text-gray-500">
                        {member.position}
                    </p>


                    <ChevronDown
                        className={`
                            w-4 h-4 mx-auto mt-2
                            text-gray-400
                            transition-transform
                            ${isHovered ? "rotate-180" : ""}
                        `}
                    />

                </div>

            </motion.div>


            <Handle
                type="source"
                position={Position.Bottom}
                className="!bg-blue-500 !w-3 !h-3 !border-2 !border-white"
            />


            <AnimatePresence>

                {isHovered && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            y: 10
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.9,
                            y: 10
                        }}
                        className="
                            absolute z-50
                            bottom-full
                            left-1/2
                            -translate-x-1/2
                            mb-3
                            w-72
                        "
                    >

                        <div className="
                            bg-white dark:bg-gray-900
                            rounded-2xl
                            shadow-2xl
                            border
                            overflow-hidden
                        ">


                            <div className="
                                h-16
                                bg-gradient-to-r
                                from-blue-500
                                via-purple-500
                                to-pink-500
                            "/>



                            <div className="p-5">


                                <div className="text-center">

                                    <h4 className="
                                        font-bold
                                        text-lg
                                    ">
                                        {member.name}
                                    </h4>


                                    <p className="text-blue-600">
                                        {member.position}
                                    </p>

                                </div>


                                <div className="mt-4 space-y-2 text-sm">


                                    {member.email && (
                                        <div className="flex gap-2 items-center">
                                            <Mail className="w-4 h-4"/>
                                            {member.email}
                                        </div>
                                    )}



                                    {member.phone && (
                                        <div className="flex gap-2 items-center">
                                            <Phone className="w-4 h-4"/>
                                            {member.phone}
                                        </div>
                                    )}




                                </div>



                                <div className="
                                    flex justify-center
                                    gap-4
                                    mt-4
                                    pt-4
                                    border-t
                                ">


                                    {member.social?.facebook && (
                                        <a href={member.social.facebook}>
                                            <FaFacebook className="w-5 h-5"/>
                                        </a>
                                    )}



                                    {member.social?.twitter && (
                                        <a href={member.social.twitter}>
                                            <FaXTwitter className="w-5 h-5"/>
                                        </a>
                                    )}



                                    {member.social?.linkedin && (
                                        <a href={member.social.linkedin}>
                                            <FaLinkedin className="w-5 h-5"/>
                                        </a>
                                    )}



                                    {member.social?.instagram && (
                                        <a href={member.social.instagram}>
                                            <FaInstagram className="w-5 h-5"/>
                                        </a>
                                    )}


                                </div>


                            </div>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </div>
    );
};


export default memo(MemberNode);