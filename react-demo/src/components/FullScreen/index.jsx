import screenfull from 'screenfull'
import { Icon, message, Tooltip } from "antd";

const click = () => {
  if (!screenfull.isEnabled) {
    message.warning("you browser can not work");
    return false;
  }
  screenfull.toggle();
};


return (
  <div className="fullScreen-container">
    <Tooltip placement="bottom" title={title}>
      <Icon type={type} onClick={click} />
    </Tooltip>
  </div>
);