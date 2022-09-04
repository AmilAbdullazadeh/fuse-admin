import FuseUtils from '@fuse/utils';
import moment from 'moment';
import _ from '@lodash';

function CommentModel(data) {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		type: 'comment',
		idMember: null,
		message: '',
		time: moment().format(moment.HTML5_FMT.DATE)
	});
}

export default CommentModel;
