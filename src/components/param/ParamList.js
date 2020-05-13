import React from 'react';
import {ParamTypes} from "../../constant/ParamTypes";
import PropTypes from "prop-types"
import ParamTextViewer from "../../containers/param/ParamTextViewer";
import ParamSelectViewer from "../../containers/param/ParamSelectViewer";
import ParamColorViewer from "../../containers/param/ParamColorViewer";
import ParamUploadViewer from "../../containers/param/ParamUploadViewer";

const mapTypeToComponent = ({
    [ParamTypes.TEXT_EDITOR]: ParamTextViewer,
    [ParamTypes.SELECTOR]: ParamSelectViewer,
    [ParamTypes.COLOR_EDITOR]: ParamColorViewer,
    [ParamTypes.UPLOAD_BUTTON]: ParamUploadViewer,
})

const ParamList = ({ rendererIndex, paramInfo }) => (
    paramInfo.map((item, paramIndex) => {
        return (
            <tr key={"tr_" + rendererIndex + "_" + paramIndex}>
                <td>{item.key}</td>
                <td>
                    {React.createElement(mapTypeToComponent[item.type], {
                        rendererIndex: rendererIndex,
                        paramIndex: paramIndex
                    })}
                </td>
            </tr>
        );
    })
)

ParamList.propTypes = {
    rendererIndex: PropTypes.number.isRequired,
    paramInfo: PropTypes.array
}

export default ParamList;
