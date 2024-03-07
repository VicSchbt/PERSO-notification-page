<script lang="ts">
	import { NotificationType, type AppNotification } from '$lib/type';
	import { generateText } from '$lib/utils';

	export let notification: AppNotification;
</script>

<li>
	<button class:active={!notification.read} on:click={() => (notification.read = true)}>
		<div class="main">
			<img src={notification.person.avatar} alt="" />
			<div class="infos">
				<p class="body">
					<span class="body-bold name link">{notification.person.name}</span>
					{generateText(notification.type)}
					<span class="body-bold link" class:group={notification.relatedGroup}>
						{#if notification.type == NotificationType.REACTION && notification.relatedPost?.title}
							{notification.relatedPost.title}
						{:else if (notification.type == NotificationType.JOIN_GROUP || notification.type == NotificationType.LEFT_GROUP) && notification.relatedGroup}
							{notification.relatedGroup}
						{/if}
					</span>
					<span class="marker" class:read={notification.read}></span>
				</p>
				<p class="body time">{notification.time}</p>
				{#if notification.type == NotificationType.MESSAGE && notification.message}
					<span class="body message">{notification.message}</span>
				{/if}
			</div>
		</div>
		{#if notification.type == NotificationType.COMMENT && notification.relatedPost?.isPicture}
			<img class="link" src={notification.relatedPost.pictureUrl} alt="" />
		{/if}
	</button>
</li>

<style lang="scss">
	@import './NotificationLine.scss';
</style>
