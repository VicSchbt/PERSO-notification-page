export const Type = {
	REACTION: 'reaction',
	FOLLOW: 'follow',
	JOIN_GROUP: 'join_group',
	MESSAGE: 'message',
	COMMENT: 'comment',
	LEFT_GROUP: 'left_group'
};

const picturePrefix = '/images/';

export const notifications = [
	{
		id: 1,
		person: {
			name: 'Mark Webber',
			avatar: `${picturePrefix}avatar-mark-webber.webp`
		},
		type: Type.REACTION,
		relatedPost: {
			title: 'My first tournament today!',
			isPicture: false,
			pictureUrl: null
		},
		relatedGroup: null,
		message: null,
		time: '1m ago',
		read: false
	},
	{
		id: 2,
		person: {
			name: 'Angela Gray',
			avatar: `${picturePrefix}avatar-angela-gray.webp`
		},
		type: Type.FOLLOW,
		relatedPost: null,
		relatedGroup: null,
		message: null,
		time: '5m ago',
		read: false
	},
	{
		id: 3,
		person: {
			name: 'Jacob Thompson',
			avatar: `${picturePrefix}avatar-jacob-thompson.webp`
		},
		type: Type.JOIN_GROUP,
		relatedPost: null,
		relatedGroup: 'Chess Club',
		message: null,
		time: '1 day ago',
		read: false
	},
	{
		id: 4,
		person: {
			name: 'Rizky Hasanuddin',
			avatar: `${picturePrefix}avatar-rizky-hasanuddin.webp`
		},
		type: Type.MESSAGE,
		relatedPost: null,
		relatedGroup: null,
		message: ` Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
  I'm already having lots of fun and improving my game.`,
		time: '5 days ago',
		read: false
	},
	{
		id: 5,
		person: {
			name: 'Kimberly Smith',
			avatar: `${picturePrefix}avatar-kimberly-smith.webp`
		},
		type: Type.COMMENT,
		relatedPost: {
			title: null,
			isPicture: true,
			pictureUrl: '/images/images-chess.webp'
		},
		relatedGroup: 'Chess Club',
		message: null,
		time: '1 week ago',
		read: false
	},
	{
		id: 6,
		person: {
			name: 'Nathan Peterson',
			avatar: `${picturePrefix}avatar-nathan-peterson.webp`
		},
		type: Type.REACTION,
		relatedPost: {
			title: '5 end-game strategies to increase your win rate',
			isPicture: false,
			pictureUrl: null
		},
		relatedGroup: null,
		message: null,
		time: '2 weeks ago',
		read: false
	},
	{
		id: 7,
		person: {
			name: 'Anna Kim',
			avatar: `${picturePrefix}avatar-anna-kim.webp`
		},
		type: Type.LEFT_GROUP,
		relatedPost: null,
		relatedGroup: 'Chess Club',
		message: null,
		time: '2 weeks ago',
		read: false
	}
];
