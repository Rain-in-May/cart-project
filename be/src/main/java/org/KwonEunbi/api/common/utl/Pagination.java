package org.KwonEunbi.api.common.utl;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Component("page") @Data @Lazy
public class Pagination {

	private int totalCount, startRow, endRow,
			pageCount, pageSize,  startPage, endPage, pageNum,
			blockCount, prevBlock, nextBlock, blockNum;

	public final int BLOCK_SIZE = 10;
	private String tname;
	private boolean existPrev, existNext;
	public Pagination(){}
	// SQL 방식
	public Pagination(String tname, int pageSize, int pageNum, int count) {
		this.tname = tname;
		this.pageSize = pageSize;
		this.pageNum = pageNum;
		this.totalCount = count;
		this.pageCount = (totalCount % pageSize != 0) ? totalCount / pageSize + 1: totalCount / pageSize;
		this.blockCount = (pageCount % BLOCK_SIZE != 0) ? pageCount / BLOCK_SIZE + 1: pageCount / BLOCK_SIZE;
		this.startRow = (pageNum - 1) * pageSize;
		this.endRow = (pageCount != pageNum) ? startRow + pageSize - 1  : totalCount - 1;
		this.blockNum = (pageNum - 1) / BLOCK_SIZE;
		this.startPage = blockNum * BLOCK_SIZE + 1;
		this.endPage = ((blockNum + 1) != blockCount) ? startPage + (BLOCK_SIZE - 1) : pageCount;
		this.existPrev = blockNum != 0;
		this.existNext = (blockNum + 1) != blockCount;
		this.nextBlock = startPage + BLOCK_SIZE;
		this.prevBlock = startPage - BLOCK_SIZE;
	}
	// POJO 방식을 위한 생성자 오버로드
	public Pagination(int pageSize, int pageNum, long count) {
		this.pageSize = pageSize;
		this.pageNum = pageNum;
		this.totalCount = (int)count;
		this.pageCount = (totalCount % pageSize != 0) ? totalCount / pageSize + 1: totalCount / pageSize;
		this.blockCount = (pageCount % BLOCK_SIZE != 0) ? pageCount / BLOCK_SIZE + 1: pageCount / BLOCK_SIZE;
		this.startRow = (pageNum - 1) * pageSize;
		this.endRow = (pageCount != pageNum) ? startRow + pageSize - 1  : totalCount - 1;
		this.blockNum = (pageNum - 1) / BLOCK_SIZE;
		this.startPage = blockNum * BLOCK_SIZE + 1;
		this.endPage = ((blockNum + 1) != blockCount) ? startPage + (BLOCK_SIZE - 1) : pageCount;
		this.existPrev = blockNum != 0;
		this.existNext = (blockNum + 1) != blockCount;
		this.nextBlock = startPage + BLOCK_SIZE;
		this.prevBlock = startPage - BLOCK_SIZE;
	}
}