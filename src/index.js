import React from "react";
import ReactDom from "react-dom";
import { Button } from 'antd';

ReactDom.render(
    <div>
        <h1>hello, world!</h1>
        <Button type="primary">Primary</Button>
    </div>,
    document.getElementById("root")
);
