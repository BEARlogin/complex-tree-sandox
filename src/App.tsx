import React from 'react';
import './App.css';
import {StaticTreeDataProvider, Tree, UncontrolledTreeEnvironment} from 'react-complex-tree';
import 'react-complex-tree/lib/style.css'
import {TreeItem, TreeItemIndex} from "react-complex-tree/lib/esm/types";

const Sandbox = () => {
  const tree1:Record<TreeItemIndex, TreeItem> = {
    left_root: {
      index: "left_root",
      canMove: false,
      children: ["left_child1", "left_child2"],
      data: "Left Root item",
      canRename: true,
      hasChildren: true,
    },
    left_child1: {
      index: "left_child1",
      canMove: false,
      children: ["left_child3"],
      data: "Left Child item 1",
      canRename: true,
      hasChildren: true,
    },
    left_child2: {
      index: "left_child2",
      canMove: false,
      children: [],
      data: "Left Child item 2",
      canRename: true,
      hasChildren: false,
    },
    left_child3: {
      index: "left_child3",
      canMove: false,
      children: [],
      data: "Left Child item 3",
      canRename: true,
      hasChildren: false,
    },
  };
  const tree2: Record<TreeItemIndex, TreeItem> = {
    right_root: {
      index: "right_root",
      canMove: false,

      children: ["right_child1", "right_child2"],
      data: "Right Root item",
      canRename: true,
      hasChildren: true,
    },
    right_child1: {
      index: "right_child1",
      canMove: true,

      children: [],
      data: "Right Child item 1",
      canRename: true,
      hasChildren: false,
    },
    right_child2: {
      index: "right_child2",
      canMove: true,
      children: [],
      data: "Right Child item 2",
      canRename: true,
      hasChildren: false,
    },
  };
  return (
      <div className="flex">
        <UncontrolledTreeEnvironment
            canDragAndDrop={true}
            canDropOnItemWithChildren={true}
            canDropOnItemWithoutChildren={true}
            canReorderItems={true}
            dataProvider={
              new StaticTreeDataProvider({ ...tree1, ...tree2 }, (item, data) => ({
                ...item,
                data,
              }))
            }
            getItemTitle={item => item.data}
            onDrop={(items, target) => {

            }}
            viewState={{}}>
          <div>
            <Tree
                treeId="tree-1"
                rootItem="left_root"
                treeLabel="Tree 1"
            />
          </div>
          <div>
            <Tree treeId="tree-2" rootItem="right_root" treeLabel="Tree 2" />
          </div>
        </UncontrolledTreeEnvironment>
      </div>
  );
};

export default Sandbox;
