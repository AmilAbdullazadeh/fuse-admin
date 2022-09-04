import ChatPanel from 'app/fuse-layouts/shared-components/chatPanel/ChatPanel';
import QuickPanel from 'app/fuse-layouts/shared-components/quickPanel/QuickPanel';
import React from 'react';

function RightSideLayout1(props) {
	return (
		<>
			<ChatPanel />

			<QuickPanel />
		</>
	);
}

export default React.memo(RightSideLayout1);
