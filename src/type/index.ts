export enum NotificationType {
	REACTION,
	FOLLOW,
	JOIN_GROUP,
	MESSAGE,
	COMMENT,
	LEFT_GROUP
}

export type AppNotification = {
	id: number;
	person: {
		name: string;
		avatar: string;
	};
	type: NotificationType;
	relatedPost: {
		title: string | null;
		isPicture: boolean;
		pictureUrl: string | null;
	} | null;
	relatedGroup: string | null;
	message: string | null;
	time: string;
	read: boolean;
};
