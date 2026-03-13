/* 전역 스타일, JS 연결 */
import "/resources/css/style.css";
import "/resources/js/common";

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
    parameters: {
        controls: { disable: true },
        actions: { disable: true },
        interactions: { disable: true },
        visualTests: { disable: true },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo",
        },
    },
};

export default preview;
