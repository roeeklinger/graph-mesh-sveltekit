<!-- src/routes/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$houdini'

	$: ({ MyQuery } = data)

	export let data: PageData
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="row flex-center flex">
	{$MyQuery.data?.cards?.[0]?.category}
</div>
