# Transaction Lifecycle

The following are the possible statuses of transaction from the moment it the moment it is included in a proof validated by L1.

## Transaction status

### NOT_RECEIVED

Transaction is not yet known to the sequencer

### RECEIVED

Transaction was received by the sequencer.
Transaction will now either execute successfully or be rejected.

### PENDING

Transaction executed successfully and entered the [pending block](./transaction-life-cycle#the-pending-block).

### REJECTED

Transaction executed unsuccessfully and thus was skipped (applies both to a pending and an actual created block).
Possible reasons for transaction rejection:

- An assertion failed during the execution of the transaction (in StarkNet, unlike in Ethereum, transaction executions do not always succeed).
- The block may be rejected on L1, thus changing the transaction status to `REJECTED`

### ACCEPTED_ON_L2

Transaction passed validation and entered an actual created block on L2.

### ACCEPTED_ON_L1

Transaction was accepted on-chain.

## The pending block

Today, StarkNet supports querying the new block before its construction is complete. This feature improves the liveness of the system prior to the decentralization phase, but will probably become obsolete once the system is decentralized, as full nodes will only propagate finalized blocks through the network.

During the construction of the block, as it is accumulating new transactions, the block’s status is PENDING. While PENDING, new transactions are dynamically added to the block. Once the sequencer decides to “close” the block, it becomes `ACCEPTED_ON_L2` and its hash is computed.

The following example is a query for the pending mainnet block:

https://alpha-mainnet.starknet.io/feeder_gateway/get_block?blockNumber=pending

See the CLI section on how to call the gateway with respect to the pending block.

## Transaction receipt

The transaction receipt contains basic transaction details (block identifiers and the index within the block),
a summary of the execution resources used by the transaction, the events emitted, a list of messages sent to L1,
and a consumed L1 message (in case the transaction invokes an L1 handler). The following is an example of a receipt:

```json
{
  "execution_resources": {
    "builtin_instance_counter": {
      "pedersen_builtin": 0,
      "range_check_builtin": 0,
      "bitwise_builtin": 0,
      "output_builtin": 0,
      "ecdsa_builtin": 0,
      "ec_op_builtin": 0
    },
    "n_steps": 178,
    "n_memory_holes": 0
  },
  "block_number": 6807,
  "transaction_index": 0,
  "transaction_hash": "0x3f187b7522320f1c87271772fedd6ad119f62595e2d9208824367463df94a5d",
  "status": "PENDING",
  "block_hash": "0x23173d4e2d5c0ecc1376b8dbe345c028aa424048c67f68812a9a83873a2d87f",
  "l2_to_l1_messages": [],
  "events": [
    {
      "data": ["0", "4321"],
      "from_address": "0x14acf3b7e92f97adee4d5359a7de3d673582f0ce03d33879cdbdbf03ec7fa5d",
      "keys": [
        "1744303484486821561902174603220722448499782664094942993128426674277214273437"
      ]
    }
  ]
}
```
