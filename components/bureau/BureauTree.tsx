// components/bureau/BureauTree.tsx
'use client';

import {
    useCallback,
    useMemo,
    useState,
} from "react";

import {
    ReactFlow,
    Background,
    Controls,
    MiniMap,
    Panel,
    useNodesState,
    useEdgesState,
    addEdge,
    Node,
    Edge,
    Connection,
    ReactFlowInstance,
} from "@xyflow/react";

import type {
    NodeTypes,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

import MemberNode from "./MemberNode";
import { members } from "./members";
import { Member } from "./types";



/**
 * Données envoyées au composant MemberNode
 */
type MemberNodeData = {
    member: Member;
};



/**
 * Type complet d'un node React Flow
 */
type MemberNodeType = Node<MemberNodeData>;



const nodeTypes = {
    member: MemberNode,
} satisfies NodeTypes;



type BureauTreeProps = {

    className?: string;
};



export default function BureauTree({ className = "" }: BureauTreeProps) {


    const initialTree = useMemo(() => {
        const nodes: MemberNodeType[] = [];
        const edges: Edge[] = [];

        // 1. Index rapide par id + calcul de la profondeur de chaque membre
        const byId = new Map(members.map((m) => [m.id, m]));

        const depthCache = new Map<string, number>();

        const getDepth = (member: Member): number => {
            if (depthCache.has(member.id)) return depthCache.get(member.id)!;

            if (!member.parentId || !byId.has(member.parentId)) {
                depthCache.set(member.id, 0);
                return 0;
            }

            const depth = getDepth(byId.get(member.parentId)!) + 1;
            depthCache.set(member.id, depth);
            return depth;
        };

        // 2. Regrouper les membres par niveau
        const levels = new Map<number, Member[]>();

        members.forEach((member) => {
            const depth = getDepth(member);
            const arr = levels.get(depth) ?? [];
            arr.push(member);
            levels.set(depth, arr);
        });

        // 3. Positionner : x réparti horizontalement par niveau, y = profondeur
        const NODE_WIDTH = 220;
        const LEVEL_HEIGHT = 180;

        levels.forEach((membersAtLevel, depth) => {
            const totalWidth = (membersAtLevel.length - 1) * NODE_WIDTH;
            const startX = -totalWidth / 2;

            membersAtLevel.forEach((member, i) => {
                nodes.push({
                    id: member.id,
                    type: "member",
                    position: {
                        x: startX + i * NODE_WIDTH,
                        y: depth * LEVEL_HEIGHT,
                    },
                    data: { member },
                });
            });
        });

        // 4. Relations hiérarchiques
        members.forEach((member) => {
            if (member.parentId && byId.has(member.parentId)) {
                edges.push({
                    id: `${member.parentId}-${member.id}`,
                    source: member.parentId,
                    target: member.id,
                    type: "smoothstep",
                    animated: true,
                    style: {
                        stroke: "#3b82f6",
                        strokeWidth: 2,
                    },
                });
            }
        });

        return { nodes, edges };
    }, []);



    const [
        nodes,
        , // setNodes non utilisé pour l'instant (mutations gérées via onNodesChange)
        onNodesChange
    ] = useNodesState<MemberNodeType>(
        initialTree.nodes
    );



    const [
        edges,
        setEdges,
        onEdgesChange
    ] = useEdgesState<Edge>(
        initialTree.edges
    );



    // Génériques alignés sur <ReactFlow<MemberNodeType>> ci-dessous,
    // sinon TypeScript refuse d'assigner l'instance reçue par onInit.
    const [
        reactFlowInstance,
        setReactFlowInstance
    ] = useState<ReactFlowInstance<MemberNodeType, Edge> | null>(null);



    const onConnect = useCallback(
        (connection: Connection) => {

            setEdges((currentEdges) =>

                addEdge(
                    connection,
                    currentEdges
                )

            );

        },
        [setEdges]
    );



    const resetView = useCallback(() => {

        reactFlowInstance?.fitView({

            padding: 0.2,

            duration: 800,

        });

    }, [reactFlowInstance]);



    return (

        <div
            className={`
                w-full
                h-full
                min-h-[400px]
                rounded-2xl
                overflow-hidden
                shadow-2xl
                
                bg-gray-50
                dark:bg-gray-900
                ${className}
            `}
        >

            <ReactFlow<MemberNodeType>

                nodes={nodes}

                edges={edges}

                onNodesChange={onNodesChange}

                onEdgesChange={onEdgesChange}

                onConnect={onConnect}

                nodeTypes={nodeTypes}

                onInit={setReactFlowInstance}

                fitView

                minZoom={0.5}

                maxZoom={2}

                proOptions={{
                    hideAttribution: true,
                }}

                defaultEdgeOptions={{

                    type: "smoothstep",

                    animated: true,

                }}

            >

                <Background
                    gap={20}
                    size={1}
                />

                <Controls
                    position="bottom-right"
                />

                <MiniMap
                    nodeColor="#3b82f6"
                />

                <Panel
                    position="top-left"
                    className="!m-4"
                >

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: -20,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        className="
                            bg-white/90
                            dark:bg-gray-800/90
                            rounded-xl
                            px-4
                            py-3
                            shadow-lg
                        "
                    >

                        <h2
                            className="
                                text-sm
                                font-semibold
                            "
                        >

                            🔵 Organigramme du Bureau

                        </h2>

                        <p
                            className="
                                text-xs
                                text-gray-500
                            "
                        >

                            {members.length} membres

                        </p>

                    </motion.div>

                </Panel>

                <Panel
                    position="top-right"
                    className="!m-4"
                >

                    <button

                        onClick={resetView}

                        className="
                            p-2
                            rounded-xl
                            bg-white
                            dark:bg-gray-800
                            shadow-lg
                            border
                        "
                    >

                        <RefreshCw
                            className="w-4 h-4"
                        />

                    </button>

                </Panel>

            </ReactFlow>

        </div>

    );
}
