import { NotificationType } from '$type/index';

export const generateText = (notificationType: NotificationType) => {
	switch (notificationType) {
		case NotificationType.REACTION:
			return 'reacted to your recent post';
		case NotificationType.FOLLOW:
			return 'followed you';
		case NotificationType.JOIN_GROUP:
			return 'has join your group';
		case NotificationType.MESSAGE:
			return 'sent you a private message';
		case NotificationType.COMMENT:
			return 'commented on your picture';
		case NotificationType.LEFT_GROUP:
			return 'left your group';
	}
};
