<script lang="ts">
	import NotificationLine from './NotificationLine.svelte';
	import { type AppNotification } from '$lib/type';
	import { read } from '$app/server';

	export let notifications: AppNotification[] = [];

	$: total = notifications.reduce(
		(acc: number, cur: AppNotification) => (cur.read ? acc : acc + 1),
		0
	);

	const handleMarkAllRead = () => {
		notifications = notifications.map((notification) => ({ ...notification, read: true }));
	};
</script>

<main>
	<div class="command">
		<h1 class="header">Notifications <span class="counter">{total}</span></h1>
		<button class="body" on:click={handleMarkAllRead}>Mark all as read</button>
	</div>

	<ul>
		{#each notifications as notification}
			<NotificationLine bind:notification />
		{/each}
	</ul>
</main>

<style lang="scss">
	@import './NotificationList.scss';
</style>
